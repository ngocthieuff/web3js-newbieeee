import sample from '../assets/metagolden_desktop.mp4';

const Intro = () => (
    <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>
);

export default Intro;
