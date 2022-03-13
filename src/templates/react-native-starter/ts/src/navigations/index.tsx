import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux';
import Dashboard from '../screens/Home';
import OnBoarding from '../screens/OnBoarding';
import OTPScreen from '../screens/OTP';
import Register from '../screens/Register';
import SignIn from '../screens/SignIn';
import Splashscreen from '../screens/SplashScreen';
import IconFeather from 'react-native-vector-icons/Feather'
import IconIon from 'react-native-vector-icons/Ionicons'
import ItineraryList from '../screens/Itinerary';
import Profile from '../screens/Profile';
import styles from './style';
import CalendarScreen from '../screens/Calendar';
import SuggestedItineraryDetails from '../screens/SuggestedItinerary';
import Notification from '../screens/Notification';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';
import ItineraryForm from '../screens/Itinerary/components/ItineraryForm';
import ItineraryDetailPage from '../screens/Itinerary/components/ItineraryDetailPage';
import OrderList from '../screens/OrderSummary/components/OrderList';
import Summary from '../screens/OrderSummary/components/Summary';
import Payment from '../screens/OrderSummary/components/Payment';
import Detail from '../screens/OrderSummary/components/Detail';
import Account from '../screens/ProfileContent/components/Account';
import { colour } from '../styles';
import SearchScreen from '../screens/SearchScreen';

const AppRouter = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="splashscreen" component={Splashscreen} initial />

                <Scene key="orderList" component={OrderList} />
                <Scene key="summary" component={Summary} />
                <Scene key="paymentMethod" component={Payment} />
                <Scene key="detail" component={Detail} />

               <Scene
                    tabs={true}
                    tabBarPosition="bottom"
                    tabBarStyle={styles.bottomTabStyle}
                    activeTintColor={colour.orangePanorama}
                    labelStyle={styles.titleStyle}
                    inactiveTintColor={colour.grey80}
                    key='main'
               >

                   <Scene
                       key='dashboard'
                       component={Dashboard}
                       icon={(props) => {
                           return (
                               <IconFeather name="home" size={32} color={props.focused ? colour.orangePanorama : colour.grey80} />
                           )
                       }}
                       title="Home"
                       hideNavBar
                   />

                   <Scene
                       key='itinerary'
                       component={ItineraryList}
                       icon={(props) => {
                           return (
                               <IconIon name="document-text-outline" size={32} color={props.focused ? colour.orangePanorama : colour.grey80} />
                           )
                       }}
                       title="Itinerary"
                       hideNavBar
                   />

                   <Scene
                       key="profile"
                       component={Profile}
                       icon={(props) => {
                           return (
                               <IconIon name="person-outline" size={32} color={props.focused ? colour.orangePanorama : colour.grey80} />
                           )
                       }}
                       title="Profile"
                       hideNavBar
                   />

               </Scene>
                <Scene key="account" component={Account} />
                <Scene key="searchScreen" component={SearchScreen} />
                <Scene key="orderList" component={OrderList} />
                <Scene key="summary" component={Summary} />
                <Scene key="paymentMethod" component={Payment} />
                <Scene key="detail" component={Detail} />
                <Scene key="itineraryForm" component={ItineraryForm} />
                <Scene key="suggestedItineraryDetails" component={SuggestedItineraryDetails} />
                <Scene key="register" component={Register} />
                <Scene key="signin" component={SignIn} />
                <Scene key="newPassword" component={NewPassword} />
                <Scene key="forgotPassword" component={ForgotPassword} />
                <Scene key="notification" component={Notification} />
                <Scene key="calendar" component={CalendarScreen} />
                <Scene key="otpscreen" component={OTPScreen} />
                <Scene key="onboarding" component={OnBoarding} />
            </Stack>
        </Router>
    )
}

export default AppRouter
