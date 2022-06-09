

export const index = () => {
    return (
        <div className="page">
            <video className='gif' autoPlay loop muted playsInline>
                <source src='index.webm' type='video/webm' />
                <source src='index.mp4' type='video/mp4' />
            </video>
            <p>cieszę się, że cię widzę użytkowniku :))</p>
        </div>
    );
}

export default index