import heroBg from '../assets/backgroundImages/hero-bg.webp';
import { Header } from './header';
import { Button } from './button';
import { SocialProof } from './socialproof';

export const Hero: React.FC = () => (
    <section className="full-container bg-cover bg-center text-center pb-10 bg-purple-200" style={{ backgroundImage: `url(${heroBg})` }}>
        <Header />
        <SocialProof/>
        <h1 className="slide-in text-5xl mt-4 md:text-6xl font-bold mb-1">
            Send money instantly⚡️
        </h1>
        <p className="slide-in text-lg md:text-xl mb-1">
            Fast, secure and low-cost payments wherever you are.
        </p>
        <Button/>
    </section>
);
