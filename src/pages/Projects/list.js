export default function ProjectList(){
    return <section className="project-list">
        <div className='project-box'>
            <img src={require('../../img/tip.png')} alt="" className='img' />
            <p className='project-title'>Tip calculator</p>
            <a className='project-link' href="https://tip-generator.pages.dev/">Click here!</a>
        </div>
        <div className='project-box'>
            <img src={require('../../img/carousel.png')} alt="" className='img' />
            <p className='project-title'>Picture's carousel</p>
            <a className='project-link' href="https://mycarousel.pages.dev/">Click here!</a>
        </div>
        <div className='project-box'>
            <img src={require('../../img/moneyCalc.png')} alt="" className='img' />
            <p className='project-title'>Salary calculator</p>
            <a className='project-link' href="https://mycalculator.pages.dev/">Click here!</a>
        </div>
        <div className='project-box'>
            <img src={require('../../img/carousel.png')} alt="" className='img' />
            <p className='project-title'>Idea maker</p>
            <a className='project-link' href="https://idea-maker.pages.dev/">Click here!</a>
        </div>
    </section>
} 