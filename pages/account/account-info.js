/**
 * Author: Praveen Singh
 * Caution: Consider this file when using NextJS or GatsbyJS
 */
import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
// import Documentation from 'views/Documentation';
import AccountInfo from 'views/AfterLogin/AccountInfo';
import DocsLayout from 'layouts/DocsLayout';
import WithLayout from 'WithLayout';
import Encodr from "encodr"
import Cookies from 'js-cookie'
import {checkToken} from '../../src/components/helper/LoginCheck'
const Component = () => {
  return (
    <NoSsr>
     <AccountInfo/>
    </NoSsr>
  );
};

const DocumentationPage = () => {
  React.useEffect(() => {
    // const JSON = new Encodr("json");
    // var data = Cookies.get('token');
    // data = JSON.decode(data)
    // console.log('getToken',data);
    const login = checkToken();
     console.log('getToken',login);
  }, []);



  return (
    <WithLayout
      component={Component}
      layout={DocsLayout}
    />
  )
};

export default DocumentationPage;