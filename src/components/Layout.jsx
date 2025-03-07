export default function Layout(props) {
    
    const {children} = props
    
    const header = (
        <header>
            <h1 className="text-gradient">FitNow Challenge</h1>
            <p> <strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="google.com" target="_blank"> Alex Gu</a> and  guidance from <a href="https://www.youtube.com/@Smoljames" target="_blank">Smoljames</a> <br /> Styled with <a href="https://www.fantacss.smoljames.com" target="_blank" >FantaCSS</a></p>
            
            
        </footer>
    )

    return (
        <>
            {header}
            {children} 
            {footer}
        </>
    )
}