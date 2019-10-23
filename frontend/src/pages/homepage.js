import React from 'react';
const Homepage = () => (
    <div className="home">
        <h1>About the Creator</h1>
        <p>
            William Michael Krzyzkowski was born in Loudoun County Virginia. He took his first programming course Junior year 
            of highshcool and the rest is history. He became a Teaching Assistant Sophmore year of college and a lead Junior year. 
            He will graduate in December 2019, and is currently seeking employment.   
        </p> 
        <h2>Education</h2> 
        <ul>
            <li>Leesburg Elementry School</li>
            <li>Smart's Mill Middle School</li>
            <li>Tuscarora Highschool</li>
            <li id="current">James Madison University</li>
        </ul>         

        <h2>Employment History</h2>
        <table>
            <tbody>
                <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
                <tr>
                    <td>Temple Hall Farm Regional Park</td>
                    <td>Festival Attendant</td>
                    <td>August 2014</td>
                    <td>October 2014</td>
                </tr>
                <tr>
                    <td>Giant Food of Maryland</td>
                    <td>Cashier</td>
                    <td>May 2015</td>
                    <td>May 2019</td>
                </tr>
                <tr>
                    <td>James Madison University</td>
                    <td>Lead Teaching Assistant, Computer Science Department</td>                        
                    <td>August 2017</td>
                    <td>Current</td>
                </tr>
                <tr>
                    <td>Government Retirement Benefits Incorporated</td>
                    <td>Developer Intern</td>
                    <td>June 2019</td>
                    <td>August 2019</td>
                </tr>
            </tbody>
        </table>
    </div>

);
export default Homepage;