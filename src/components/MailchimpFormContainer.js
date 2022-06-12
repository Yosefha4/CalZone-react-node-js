import React from 'react';
import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpFormContainer = props => {

    const postUrl = 'https://gmail.us12.list-manage.com/subscribe/post'
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
            />
        </div>
    );
};

export default MailchimpFormContainer;