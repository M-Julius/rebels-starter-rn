import RtmEngine from 'agora-react-native-rtm';
import { EventEmitter } from 'events';
import { Actions } from 'react-native-router-flux';
import { Logger } from './rtm-logger';

const config = require('../agora.config.json');

export default class RtmAdapter extends EventEmitter {
  private readonly client: RtmEngine;
  public uid: string | any;

  constructor() {
    super();
    this.uid = null;
    this.client = new RtmEngine();
    const events = [
      'tokenExpired',
      'remoteInvitationRefused',
      'remoteInvitationFailure',
      'remoteInvitationCanceled',
      'remoteInvitationAccepted',
      'messageReceived',
      'localInvitationRefused',
      'localInvitationReceivedByPeer',
      'localInvitationFailure',
      'localInvitationCanceled',
      'localInvitationAccepted',
      'error',
      'connectionStateChanged',
      'channelMessageReceived',
      'channelMemberLeft',
      'channelMemberJoined',
      'remoteInvitationReceived',
    ];
    events.forEach((event: string) => {
      // @ts-ignore
      this.client.on(event, (evt: any) => {
        // console.warn(event, evt);
        this.emit(event, evt);
      });
    });
  }

  async clientCreation(uid: string, cb: Function): Promise<any> {
    try {
      
      await this.client.createClient('011800a73b594b7bb2dafe8c71dfbe36')
      console.log('client created', uid)
      this.client.login({uid: uid}).then((_) => {
        Actions.push('dashboard')
        cb(true)
      })
      .catch(error => {
        console.log(error)
      })
    
    } catch (error) {
      throw error
      
    }
  }

  async logout(): Promise<any> {
    await this.client.logout();
    Logger.log('logout success');
  }

  async join(cid: string): Promise<any> {
    return this.client.joinChannel(cid);
  }

  async leave(cid: string): Promise<any> {
    return this.client.leaveChannel(cid);
  }

  async sendChannelMessage(param: {
    channel: string;
    message: string;
  }): Promise<any> {
    return this.client.sendMessageByChannelId(param.channel, param.message);
  }

  async getAllChannelMember(param: {cid: string}): Promise<any> {
    return this.client.getChannelMembersBychannelId(param.cid)
  }

  async sendLocalInvitation(param: { uid: string, channelId: string, content?: string }): Promise<any> {
    return this.client.sendLocalInvitation(param)
  }

  async destroy(): Promise<any> {
    await this.client.destroyClient();
    Logger.log('destroy');
  }
}