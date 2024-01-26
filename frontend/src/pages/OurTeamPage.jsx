import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css"
import TeamsCard from "../components/TeamsCard"
import profilepic from "../assets/governingbody/president.png"
import PageHeader from '../components/PageHeader';
import HeaderImage from "../assets/header-testing.jpg"

function OurTeamPage(){
    return(
        <>  
            <PageHeader
            title = "Our Team"
            image = {HeaderImage}
             />

            <div className="TeamPage">
                <section className="PatronAndMentor OurTeam">
                    <h1>Patron and Mentors</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {profilepic}
                            name = "Prof. Rajeev Ahuja"
                            designation = "Director, IIT Ropar"
                            // email = "2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Dr. Pushpendra P. Singh"
                            designation = "Associate Professor, IIT Ropart"
                            // email = "2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Prof. Harpreet Singh"
                            designation = "Professor, IIT Ropar"
                            // email = "2021eeb1204@iitrpr.ac.in"
                        />
                 
                    </div>
                </section>
                <section className="GoverningBody OurTeam">
                    <h1>Governing Body</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {profilepic}
                            name = "Shivam"
                            designation = "President"
                            email = "2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Yashaswini Vajja"
                            designation = "Vice President"
                            email = "2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Reetika"
                            designation = "Vice President SI"
                            email = "2021eeb1204@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {profilepic}
                            name = "Nehal Sonkar"
                            designation = "Secretary"
                            email = "2021meb1304@iitrpr.ac.in"
                        />
                      
                          <TeamsCard
                            img = {profilepic}
                            name = "Aditya Mote"
                            designation = "Treasurer"
                            email = "2021meb1298@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {profilepic}
                            name = "Navrinder Singh Dhaliwal"
                            designation = "Member"
                            email = "2021meb1302@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {profilepic}
                            name = "Pranav Menon"
                            designation = "Member"
                            email = "2022meb1329@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {profilepic}
                            name = "Palla Ramprasad"
                            designation = "Member"
                            email = "palla.21bmz0007@iitrpr.ac.in"
                        />
                     
                             <TeamsCard
                            img = {profilepic}
                            name = "Ajay Kumar"
                            designation = "Member"
                            email = "2022mcb1254@iitrpr.ac.in"
                        />
                             <TeamsCard
                            img = {profilepic}
                            name = "Pawan Kumar"
                            designation = "Member"
                            email = "pawan.21phz0005@iitrpr.ac.in"
                        />
                                <TeamsCard
                            img = {profilepic}
                            name = "Priyanshu Singh"
                            designation = "Member"
                            email = "2022meb1332@iitrpr.ac.in"
                        />
                                <TeamsCard
                            img = {profilepic}
                            name = "Kumar Mangalam"
                            designation = "Member"
                            email = "2022aim1002@iitrpr.ac.in"
                        />
                    </div>
                </section>
                <section className="Web-developer OurTeam">
                    <h1>Web Developers</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {profilepic}
                            name = "Mr. Catinson"
                            designation = "President"
                            email = "sample@email.com"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Mr. Catinson"
                            designation = "President"
                            email = "sample@email.com"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Mr. Catinson"
                            designation = "President"
                            email = "sample@email.com"
                        />
                    </div>
                </section>
                <Link className='LinkForPastTeams' to="/pastteams">
                    <button type="button" className="PastTeamsButton"><b>Past Teams</b> &#10148;</button>
                </Link>
            </div>
        </>
    )
}

export default OurTeamPage