"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OurTeams() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=6'); // Fetch 6 random users
      const data = await response.json();
      setTeamMembers(data.results);
    };

    fetchTeamMembers();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="hero h-72 bg-primary">
        <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
          <div className="max-w-lg font-cousine">
            <h1 className="text-3xl md:text-4xl font-bold">Meet Our Team</h1>
            <p className="text-1xl md:text-2xl py-2">
              <span className="text-third font-semibold">This is</span> our teams who works at <span className="text-third font-quicksand font-semibold">Autobikes.ID</span>
            </p>
          </div>
        </div>
      </section>
      {/* Hero */}

      {/* Teams */}
      <section className="teams w-full h-full py-10 px-5 bg-secondary">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto gap-7">
          {teamMembers.map((member: any) => (
            <div className="card w-full h-full lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in" key={member?.login?.uuid}>
              <figure>
                <Image
                  src={member?.picture?.large}
                  width={160}
                  height={220}
                  alt={`Profile of ${member?.name?.title} ${member?.name?.first} ${member?.name?.last}`}
                  className="w-full h-full object-cover object-center"
                />
              </figure>
              <div className="card-body max-w-xs w-full h-full">
                <h2 className="card-title font-cousine text-2xl">{member?.name?.title || 'No title'} {member?.name?.first} {member?.name?.last}</h2>
                <h2 className="card-title font-cousine text-3xl">{member?.job?.title}</h2>
                <p className="text-justify">
                  {member?.dob?.age} years old, with experience in {member.location.city}, {member.location?.country}.
                </p>
                <div className="card-actions justify-start">
                  <p>{member?.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Teams */}
    </main>
  );
}


// import Image from "next/image";

// export default function OurTeams() {

//     return (
//         <main>
//             {/* Hero */}
//             <section className="hero h-72 bg-primary">
//                 <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
//                     <div className="max-w-lg font-cousine">
//                         <h1 className="text-3xl md:text-4xl font-bold">Meet Our Team</h1>
//                         <p className="text-1xl md:text-2xl py-2">
//                             <span className="text-third font-semibold">This is</span> our teams who works at <span className="text-third font-quicksand font-semibold">Autobikes.ID</span>
//                         </p>
//                     </div>
//                 </div>
//             </section>
//             {/* Hero */}

//             {/* Teams */}
//             <section className="teams w-full h-full py-10 px-5 bg-secondary">
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto gap-7">
//                     <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
//                         <figure>
//                             <Image
//                                 src="/Profiles-Teams.png"
//                                 width={160}
//                                 height={220}
//                                 alt="Profile Teams" 
//                                 className="w-full h-full"
//                             />
//                         </figure>
//                         <div className="card-body max-w-xs">
//                             <h2 className="card-title font-cousine text-2xl">Matt David</h2>
//                             <h2 className="card-title font-cousine text-3xl">CEO</h2>
//                             <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
//                             <div className="card-actions justify-start">
//                                 <p>mattdav@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
//                         <figure>
//                             <Image
//                                 src="/Profiles-Teams.png"
//                                 width={160}
//                                 height={220}
//                                 alt="Profile Teams" 
//                                 className="w-full h-full"
//                             />
//                         </figure>
//                         <div className="card-body max-w-xs">
//                             <h2 className="card-title font-cousine text-2xl">Matt David</h2>
//                             <h2 className="card-title font-cousine text-3xl">CO-Founder</h2>
//                             <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
//                             <div className="card-actions justify-start">
//                                 <p>mattdav@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
//                         <figure>
//                             <Image
//                                 src="/Profiles-Teams.png"
//                                 width={160}
//                                 height={220}
//                                 alt="Profile Teams" 
//                                 className="w-full h-full"
//                             />
//                         </figure>
//                         <div className="card-body max-w-xs">
//                             <h2 className="card-title font-cousine text-2xl">Matt David</h2>
//                             <h2 className="card-title font-cousine text-3xl">Head Mechanic</h2>
//                             <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
//                             <div className="card-actions justify-start">
//                                 <p>mattdav@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
//                         <figure>
//                             <Image
//                                 src="/Profiles-Teams.png"
//                                 width={160}
//                                 height={220}
//                                 alt="Profile Teams" 
//                                 className="w-full h-full"
//                             />
//                         </figure>
//                         <div className="card-body max-w-xs">
//                             <h2 className="card-title font-cousine text-2xl">Matt David</h2>
//                             <h2 className="card-title font-cousine text-3xl">Head Marketing</h2>
//                             <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
//                             <div className="card-actions justify-start">
//                                 <p>mattdav@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
//                         <figure>
//                             <Image
//                                 src="/Profiles-Teams.png"
//                                 width={160}
//                                 height={220}
//                                 alt="Profile Teams" 
//                                 className="w-full h-full"
//                             />
//                         </figure>
//                         <div className="card-body max-w-xs">
//                             <h2 className="card-title font-cousine text-2xl">Matt David</h2>
//                             <h2 className="card-title font-cousine text-3xl">Manager</h2>
//                             <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
//                             <div className="card-actions justify-start">
//                                 <p>mattdav@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="card lg:card-side bg-base-100 shadow-xl hover:translate-x-1 transition-all ease-in">
//                         <figure>
//                             <Image
//                                 src="/Profiles-Teams.png"
//                                 width={160}
//                                 height={220}
//                                 alt="Profile Teams" 
//                                 className="w-full h-full"
//                             />
//                         </figure>
//                         <div className="card-body max-w-xs">
//                             <h2 className="card-title font-cousine text-2xl">Matt David</h2>
//                             <h2 className="card-title font-cousine text-3xl">Secretary</h2>
//                             <p className="text-justify">Over 10 years of experience in the automotive industry, focusing on developing dealer networks in West Java.</p>
//                             <div className="card-actions justify-start">
//                                 <p>mattdav@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* Teams */}
//         </main>
//     )
// }