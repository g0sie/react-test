

export const spinningMiku = () => {
    return (
        <div className="page">
            <video className='gif' autoPlay loop muted playsInline>
                <source src='miku360.webm' type='video/webm' />
                <source src='miku360.mp4' type='video/mp4' />
            </video>
            <video className='gif' autoPlay loop muted playsInline>
                <source src='miku360.webm' type='video/webm' />
                <source src='miku360.mp4' type='video/mp4' />
            </video>
        </div>
    );
}

export default spinningMiku