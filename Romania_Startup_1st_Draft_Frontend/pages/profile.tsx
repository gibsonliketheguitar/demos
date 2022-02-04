import type { NextPage } from 'next'
import Header from '../src/components/profile-dash/Header'
import Main from '../src/components/profile-dash/Main'
import Map from '../src/components/profile-dash/Map'
import ProfileLayout from '../src/layout/ProfileLayout'

const Profile: NextPage = () => {
    return (
        <ProfileLayout
            top={<Header />}
            left={<Main />}
            right={<Map />}
        />
    )
}

export default Profile