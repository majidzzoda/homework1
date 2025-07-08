import React from 'react'
import './App.css'
import logo from './assets/Logo.png'
import hero from './assets/Hero area Image.png'
import icon from './assets/icon.png'
import adidas from './assets/adidas.png'
import red from './assets/red.png'
import play from './assets/Play button.png'
import Stylee from './assets/Style.png'
import alo from './assets/alo.png'
import logoIpsum from './assets/Logo — копия.png'
import image2 from './assets/Image (2).png'
import socials from './assets/socials.png'

const App = () => {
  return (
    <div>
      <header>
        <div className="headerDiv">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>The Team</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <button>Sign Up</button>
        </div>
        <section className='sect1'>
          <aside className='left1'>
            <div>
              <span className='blue'>Make </span><span>a Creative <br /> solutions for your <br /> Creative </span><span className='blue'>ideas.</span>
            </div>
            <p>We are here to give you effective ideas. We help <br /> the brands to become what they want. </p>
            <button>Get Started</button>
          </aside>
          <aside>
            <img src={hero} alt="" />
          </aside>
        </section>
      </header>
      <main>
        <section className='sect2'>
          <h1>We provide great services</h1>
          <p>We help people to think independent. Be the boss of your brand and be the <br /> storyteller. An appropriate approach.</p>
          <div className='div1'>
            <article>
              <img src={icon} alt="" />
              <b>Web Design</b>
              <span>Powerful creations for the <br /> practice safe design.</span>
            </article>
            <article>
              <img src={adidas} alt="" />
              <b>Identity & Branding</b>
              <span>Powerful creations for the <br /> practice safe design.</span>
            </article>
            <article>
              <img src={icon} alt="" />
              <b>Print and Packaging</b>
              <span>Powerful creations for the <br /> practice safe design.</span>
            </article>
            <article>
              <img src={adidas} alt="" />
              <b>Content Writing</b>
              <span>Powerful creations for the <br /> practice safe design.</span>
            </article>
          </div>
        </section>
        <section className='sect3'>
          <aside className='left3'>
            <h1>Johnatan Doe </h1>
            <span>Marketing Specialist _____</span>
            <span>To make your web design company famous in the little <br />
              we are here to provide you as many as catchy and useful <br />
              web design company will surely help your company.</span>
            <button>Learn More</button>
          </aside>
          <aside>
            <img src={red} alt="" />
          </aside>
        </section>
        <section className='sect4'>
          <h1>Watch how we work</h1>
          <p>Capture more customers with a great brand recall. Whether you need a tising or as a tagline for <br /> your business, our slogan generator will help you come up with us.</p>
          <img src={play} alt="" />
        </section>
        <section className='sect5'>
          <b className='bb'>Best features in the world</b> <br />
          <span className='ss'>Capture more customers wd recall. Whether you need a tising or as a tagline for you. Capture more <br /> customers wd recall. Whether you need a tising or as a tagline for you.</span>
          <div className="div2">
            <article>
              <img src={alo} alt="" />
              <b>Sleek and smooth animation</b>
              <span>Powerful creations for the practice safe <br /> design creations for the prac.</span>
              <img src={Stylee} alt="" />
            </article>
            <article>
              <img src={alo} alt="" />
              <b>Crafted with detail</b>
              <span>Powerful creations for the practice safe <br /> design creations for the prac.</span>
              <img src={Stylee} alt="" />
            </article>
            <article>
              <img src={alo} alt="" />
              <b>Save your time</b>
              <span>Powerful creations for the practice safe <br /> design creations for the prac.</span>
              <img src={Stylee} alt="" />
            </article>
            <article>
              <img src={alo} alt="" />
              <b>Responsive on any device</b>
              <span>Powerful creations for the practice safe <br /> design creations for the prac.</span>
              <img src={Stylee} alt="" />
            </article>
            <article>
              <img src={alo} alt="" />
              <b>Easy to customize</b>
              <span>Powerful creations for the practice safe <br /> design creations for the prac.</span>
              <img src={Stylee} alt="" />
            </article>
            <article>
              <img src={alo} alt="" />
              <b>Quickly effective support</b>
              <span>Powerful creations for the practice safe <br /> design creations for the prac.</span>
              <img src={Stylee} alt="" />
            </article>
          </div>
        </section>
        <section className='sect6'>
          <img src={logoIpsum} alt="" />
          <b>“Always a pleasure to work with The Agency Creative. Such <br /> professional and happy people and you know you’ll receive a quick <br /> innovative and no fuss service.”</b>
          <div className='flex'>
            <aside>
              <img src={image2} alt="" />
            </aside>
            <aside className='right'>
              <span>Johnatan Doe </span>
              <span>Web Designer</span>
            </aside>
          </div>
        </section>
        <section className='sect7'>
          <h1>People have tried to predict the future since <br /> the dawn of time.</h1>
          <button>Get Started</button>
        </section>
      </main>
      <footer>
        <div className='flexArticle'>
          <article>
            <b>Freelancer</b>
            <div>
              <span className="dollar">$</span>
              <span className='nine'>19</span>
              <span>/mo</span>
            </div>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <button>Subscribe</button>
          </article>
          <article>
            <b>Corporate</b>
            <div>
              <span className="dollar">$</span>
              <span className='nine'>24</span>
              <span>/mo</span>
            </div>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <button>Subscribe</button>
          </article>
          <article>
            <b>Agency</b>
            <div>
              <span className="dollar">$</span>
              <span className='nine'>25</span>
              <span>/mo</span>
            </div>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <button>Subscribe</button>
          </article>
          <article>
            <b>Enterprise</b>
            <div>
              <span className="dollar">$</span>
              <span className='nine'>15</span>
              <span>/mo</span>
            </div>
            <p>5 Psd fles included</p>
            <p>24 hours free support</p>
            <p>Multiple features installed</p>
            <p>100 Elements PSD + Al</p>
            <button>Subscribe</button>
          </article>
        </div>
        <div className="tagiFooter">
          <ul>
            <li>Home</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <img src={socials} alt="" />
        </div>
        <p className='ppp'>@ A new era 2016. Awesome wireframe  by Andrei Dorin</p>
      </footer>
    </div>
  )
}
export default App  