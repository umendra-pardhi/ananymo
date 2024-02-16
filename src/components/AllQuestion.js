import QueBlock from './QueBlock';
import { Link } from 'react-router-dom';

function AllQuestion(){
    return(
        <div className="container pt-5 pb-5" >
<div className="row">
    <div className="col-6">
    <h4>All questions</h4>
    </div>
    <div className="col-6">
        <Link to={"/ask-question"} className='btn btn-sm btn-primary float-end'>Ask Question</Link>
    </div>
</div>


        <QueBlock votes={6} ans_count={3} view_count={8} q_title={"How can I automatically change the IP address on each request or when reconnecting in Selenium with Python?" } q_desc={"It is necessary to randomly select a proxy with authorization from proxies.txt for each request. It doesn't work as it should... import random import time from selenium import webdriver from ..."} img={"https://lh3.googleusercontent.com/a/ACg8ocKuduhyDnHPrBhrzuCn6rXpCBECYFWmnxVIK0GQLwwQdiY=s96-c"} username="anonymous" posted_on="15/02/2024" />

</div>
    )
}

export default AllQuestion;