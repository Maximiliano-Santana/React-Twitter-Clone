import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export default function App() {
    const format = (userName) => `@${userName}`;

    return (
        <>
            <TwitterFollowCard formatUserName={format} userName="GitHub" name="Github" isFollowing={false}/>
            <TwitterFollowCard formatUserName={format} userName="Bartolo" name="DonBartolo" isFollowing={false}/>
            <TwitterFollowCard formatUserName={format} userName="Maximiliano-Santana" name="Max Santana" isFollowing={false}/>
        </>
    );
}

