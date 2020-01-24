import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {version} from '../../../package.json';
import get from 'lodash/get';
import moment from 'moment';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import classes from './Layout.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import NotificationCloseButtonTemplate from '../Notification/NotificationCloseButtonTemplate/NotificationCloseButtonTemplate';
import NotificationTopPage from "../NotificationTopPage/NotificationTopPage";
import MainNotifications from "../../config/mainNotifications";
import i18n from "../i18n/i18n";

import { isUserActive } from '../../helpers/engineer/engineer';
import { formatDateMMDDYYY } from '../../helpers/date/date';

export function Layout({ children, isProduction, environment, currentUser, ...headerProps }) {
    const notificationCode = get(currentUser, 'mainNotification.code', null);

    let dcNotification = false;
    if (notificationCode === MainNotifications.DC_PASSWORD_EXPIRES) {
        const expiryDate = moment(get(currentUser, 'mainNotification.data[0]')).utc();
        const today = moment().utc().startOf('day');
        const diffDays = expiryDate.diff(today, 'days');
        const changePassword = i18n.t("general.messages.dc_password_change");
        if (diffDays < 0) {
            dcNotification = i18n.t("general.messages.dc_password_expired", { date: formatDateMMDDYYY(expiryDate), changePassword });
        } else if (diffDays === 0) {
            dcNotification = i18n.t("general.messages.dc_password_expires_today", { changePassword });
        } else if (diffDays < 7) {
            dcNotification = i18n.t("general.messages.dc_password_will_expire", { days: diffDays, changePassword, count: diffDays });
        }
    }

    let mainClass = classes.Main;
    if (!isProduction && dcNotification) {
        mainClass = classes.MainDoubleNotification;
    } else if (!isProduction || dcNotification) {
        mainClass = classes.MainSingleNotification;
    }

    return (
        <Fragment>
            
            {!isProduction && <NotificationTopPage message={i18n.t("general.messages.environment", { environment } )} />}
            {dcNotification && <NotificationTopPage message={dcNotification} />}
            {!isUserActive(currentUser) && <NotificationTopPage message={i18n.t("general.messages.user_inactive")} />}

            <ToastContainer
                className={classes.Notifications}
                closeButton={
                    <NotificationCloseButtonTemplate />
                }
            />

            <Header
                {...headerProps}
            />

            <main className={mainClass}>
                {children}
            </main>

            <Footer version={version}/>
        </Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

const mapStateToProps = ({
    healthReducer: { isProduction , environment},
    profile: { currentUser }
}) => {
    return { isProduction, environment, currentUser };
}

export default connect(mapStateToProps)(Layout);