/* eslint-disable react/prop-types */

function ProfilePic({
    height = "h-10",
    width = "h-10",
    path = '',
    radius = "rounded-md",
    objectFit = ""
}) {
  return (
  <img className={`xs:w-64 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 ${width} ${height} lg:w-11/12 lg:h-11/12 ${radius} ${objectFit}`} src={path} alt="profile pic"/>
  )
}

export default ProfilePic;