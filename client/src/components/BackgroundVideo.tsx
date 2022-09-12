import sample from '../assets/metagolden_desktop.mp4';

const BackgroundVideo = () => (
    <div>
        <video className='' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
    
        </video>
    </div>
);

export default BackgroundVideo;
