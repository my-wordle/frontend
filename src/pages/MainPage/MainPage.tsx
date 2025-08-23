import Greeting from './components/Greeting';

export const MainPage = () => {
    return (
        <div className="w-screen h-screen flex justify-evenly items-center flex-col">
            <Greeting />
        </div>
    );
};

export default MainPage;
