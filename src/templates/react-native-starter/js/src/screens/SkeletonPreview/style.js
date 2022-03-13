import {
  RatioHelper,
} from 'helpers';

export default {
  container: {
    flex: 1,
    alignItems: 'center',
  },

  headerContainer: {
    position: 'relative',
    marginBottom: 60
  },

  backgroundImage: {
    width: RatioHelper.screenWidth,
    height: 150,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: 100,
    left: (RatioHelper.screenWidth / 2) - 50,
    borderWidth: 5,
    borderColor: 'white'
  },

  profileInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },

  description: {
    fontSize: 12,
    fontWeight: 'bold'
  },

  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: RatioHelper.screenWidth - 20,
    marginBottom: 15
  },

  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10
  },

  buttonContainer: {
    marginBottom: 20
  },

  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5
  }
};
