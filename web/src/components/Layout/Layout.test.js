import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotificationTopPage from '../NotificationTopPage/NotificationTopPage';
import { Layout } from './Layout';
import classes from './Header.module.scss';
import MainNotifications from "../../config/mainNotifications";

describe('<Layout />', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            title: "Vendor Management Tool",
            children: "<p>Children</p>",
            isProduction: true
        };
        wrapper = shallow(<Layout {...props} /> );
    });

    it('should render <Layout /> component', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.exists(`main.${classes.Main}`)).toBe(true);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('should render a notification on development environment', () => {
        wrapper.setProps({ isProduction: false, environment: 'development' });
        expect(wrapper.find(NotificationTopPage)).toHaveLength(1);
        expect(wrapper.exists(`main.${classes.MainSingleNotification}`)).toBe(true);
    });

    it('should render a notification about DC Password expiry date', () => {
        wrapper.setProps({
            currentUser: {
                mainNotification: {
                    code: MainNotifications.DC_PASSWORD_EXPIRES,
                    data: ['2019-01-01']
                }
            }
        });
        expect(wrapper.find(NotificationTopPage)).toHaveLength(1);
        expect(wrapper.exists(`main.${classes.MainSingleNotification}`)).toBe(true);
    });

    it('should render two notifications', () => {
        wrapper.setProps({
            isProduction: false,
            environment: 'development',
            currentUser: {
                mainNotification: {
                    code: MainNotifications.DC_PASSWORD_EXPIRES,
                    data: ['2019-01-01']
                }
            }
        });
        expect(wrapper.find(NotificationTopPage)).toHaveLength(2);
        expect(wrapper.exists(`main.${classes.MainDoubleNotification}`)).toBe(true);
    });
})

