

const checkGoogleAuthToken = async (token) => {

    try {
   const googleResponse = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      )
        const googleResponseJson = await googleResponse.json()

        return googleResponseJson
    } catch (error) {
        console.log(error)
        return null
    }
}

export default checkGoogleAuthToken