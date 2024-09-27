import './Style.css'
export default function Netflix() {
    return (
        <div>
            <div className="main">
                <div className="box"></div>
                <div className="navbar">
                    <span>
                        <img src="/logo.svg" alt="netflix" />
                    </span>
                    <div className="nav-end">
                        <div className="btn"
                            style={{
                                background: 'transparent',
                                opacity: 0.9,
                                border: '2px solid grey',
                                width: '126px',
                                height: '34px',
                                display: 'flex',
                                gap: '5px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <span className="icon" style={{ color: 'white', fontWeight: 'bolder' }}>
                                <span className="material-symbols-outlined">
                                    translate
                                </span>
                            </span>
                            <select name="Lang" id="lang"
                                style={{
                                    border: 'none',
                                    color: 'white',
                                    background: 'transparent',
                                    fontWeight: 'bold'
                                }}>
                                <option value="English" style={{ backgroundColor: 'aqua', color: 'black' }}>English</option>
                                <option value="Hindi" style={{ backgroundColor: 'aqua', color: 'black' }}>Hindi</option>
                            </select>
                        </div>
                        <div className="btn" style={{ fontSize: '15px', width: '78px', height: '34px' }}>Sign In</div>
                    </div>
                </div>
                <div className="get">
                    <span>
                        <h1>Unlimited movies, TV shows and more</h1>
                    </span>
                    <span>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                    </span>
                    <span>
                        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                    </span>
                    <span>
                        <form action="/Webdev/index.html">
                            <input type="email" placeholder="Email address" name="q" style={{ color: 'white', height: '7vh' }} />
                            <div className="btn" id="email" style={{ width: '13vw' }}>
                                <button className="hi">Get started</button>
                                <span className="material-symbols-outlined">
                                    arrow_forward_ios
                                </span>
                            </div>
                        </form>
                    </span>
                </div>
            </div>
            <div className="separation"></div>
            <div className="vid">
                <div className="boxx">
                    <h1>Enjoy on your TV</h1><br />
                    <h4>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
                </div>
                <div className="vid1">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"autoPlay loop muted  playsInline />
                </div>
            </div>
            <div className="separation"></div>
            <div className="next">
                <div className="z">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="mobile" />
                </div>
                <div className="t">
                    <span>
                        <h1>Download your shows to watch offline</h1>
                    </span>
                    <span>
                        <h3>Save your favourites easily and always have something to watch.</h3>
                    </span>
                </div>
            </div>
            <div className="separation"></div>

            <div className="g1">
                <div className="t1">
                    <span>
                        <h1>Watch everywhere</h1>
                        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                    </span>
                </div>
                <div className="g">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="devices" />
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                        autoPlay loop></video>
                </div>
            </div>
            <div className="separation"></div>
            <div className="kid">
                <div className="k">
                    <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
                        alt="kids" />
                </div>
                <div className="k1">
                    <span>
                        <h1>Create profiles for kids</h1>
                    </span>
                    <br />
                    <h4>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h4>
                </div>
            </div>
            <div className="separation"></div>

            <div className="ques">
                <div className="one">
                    <div>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className="q1">
                        <span className="h2">What is Netflix?
                            <i className="material-symbols-outlined">add</i>
                        </span>
                    </div>
                    <div className="q1">
                        <span className="h2">How much does Netflix cost?
                            <i className="material-symbols-outlined">add</i>
                        </span>
                    </div>
                    <div className="q1">
                        <span className="h2">Where can I watch?
                            <i className="material-symbols-outlined">add</i>
                        </span>
                    </div>
                    <div className="q1">
                        <span className="h2">How do I cancel?
                            <i className="material-symbols-outlined">add</i>
                        </span>
                    </div>
                    <div className="q1">
                        <span className="h2">What can I watch on Netflix?
                            <i className="material-symbols-outlined">add</i>
                        </span>
                    </div>
                    <div className="q1">
                        <span className="h2">Is Netflix good for kids?
                            <i className="material-symbols-outlined">add</i>
                        </span>
                    </div>
                    <br />
                    <div className="ex">
                        <span>
                            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                        </span>
                        <span>
                            <form action="/Webdev/index.html">
                                <input type="email" placeholder="Email address" name="q" style={{ color: 'white', height: '7vh' }} />
                                <div className="btn" id="email" style={{ width: '13vw' }}>
                                    <button className="hi">Get started</button>
                                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
            <div className="separation"></div>
            <div className="footer">
                <div className="op"></div>
                <span>Questions? Call <u>000-800-919-1694</u></span>
                <div className="grid">
                    <div className="invest"><a href="/">FAQ</a></div>
                    <div className="invest"><a href="/">Help Centre</a></div>
                    <div className="invest"><a href="/">Account</a></div>
                    <div className="invest"><a href="/">Media Centre</a></div>
                    <div className="invest"><a href="/">Investor Relations</a></div>
                    <div className="invest"><a href="/">Jobs</a></div>
                    <div className="invest"><a href="/">Ways to Watch</a></div>
                    <div className="invest"><a href="/">Terms of Use</a></div>
                    <div className="invest"><a href="/">Privacy</a></div>
                    <div className="invest"><a href="/">Cookie Preferences</a></div>
                    <div className="invest"><a href="/">Corporate Information</a></div>
                    <div className="invest"><a href="/">Contact Us</a></div>
                    <div className="invest"><a href="/">Speed Test</a></div>
                    <div className="invest"><a href="/">Legal Notices</a></div>
                    <div className="invest"><a href="/">Only on Netflix</a></div>
                </div>
            </div>
        </div>
    );
}
