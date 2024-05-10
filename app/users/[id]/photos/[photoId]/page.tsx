import React from 'react'


interface Props {
    params: {
      id: number;
      photoId: number;
    }
}

const UserPhotoDetailsPage = (  { params: {id, photoId} } : Props) => {
  return (
    <div>User Photo Details Page User ID: {id} Photo ID: {photoId}</div>
  )
}

export default UserPhotoDetailsPage