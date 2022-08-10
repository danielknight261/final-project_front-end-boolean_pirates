import React from 'react'
import Image from 'next/image'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

const Profile = ({user}) => {
  console.log(user)

  return (
    <div className="mt-5">
      <div>
        <div className="shadow-lg">
          <div className="flex justify-center py-10 bg-gradient-to-r from-sky-200 via-teal-200 to-sky-200">
            <div>
              <Image
                className="inline object-cover w-8 h-8 rounded-full"
                src={user?.picture}
                alt={user?.sub}
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div>
            <p className="sm:text-2xl text-black-300 pt-5 pb-4 text-center">
              {user?.name}
            </p>
            <p className="sm:text-1xl text-black-300 pb-5 text-center">
              {' '}
              Last logged in : {user?.updated_at}
            </p>
          </div>
        </div>

        {/* card */}

        <div className="flex justify-center sm:text-1xl text-black-300 py-12">
          <p className="underline text-bold">My Uploads</p>
        </div>
      </div>
      {/* card holder that aligns the cards to center */}
      <div className="flex items-center justify-center">
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            data
              .filter((myCard) => myCard.creator === user.sub)
              .map((data, index) => (
                <div key={index} className="m-2">
                  <Card
                    user={user}
                    imageUrl={data.imageUrl}
                    title={data.title}
                    materials={data.materials}
                    likes={data.likes}
                    date={data.createdAt}
                    id={data._id}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await fetch(
    `https://backend-soc.herokuapp.com/tutorials`,
  ).then((r) => r.json())

  return {
    props: {
      data,
    },
  }
}

export default Profile
