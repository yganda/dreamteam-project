import React from 'react';
import { ReactComponent as PageImg } from '../../assets/ufo-cow.svg';
import './NotFoundPage.scss';

const PAGE_TITLE = '404';
const PAGE_SUB_TITLE = 'oops! page was stolen';
const PAGE_DESCRIPTION = 'Perhaps you can try to refresh the page, sometimes it works';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <section className="not-found-page__title">
        <p className="not-found-page__main-title">{PAGE_TITLE}</p>
        <p className="not-found-page__subtitle">{PAGE_SUB_TITLE}</p>
        <p className="not-found-page__description">{PAGE_DESCRIPTION}</p>
      </section>
      <section className="not-found-page__page-img">
        <PageImg />
      </section>
    </div>
  )
};

export default NotFoundPage;
