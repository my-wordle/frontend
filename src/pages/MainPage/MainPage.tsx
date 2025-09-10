import { useNavigate } from 'react-router';
import Greeting from './components/Greeting';

export const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex justify-evenly items-center flex-col">
            <Greeting onSoloSelect={() => navigate('/solo')} />
        </div>
    );
};

export default MainPage;
