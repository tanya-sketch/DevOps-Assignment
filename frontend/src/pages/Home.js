export default function Home() {
    return (
        <>
            <h1 className="homepage-title">Homepage</h1>
            <ul className="productBox">
                {/* Existing Products */}
                <li>
                    <a href="/product/143" className="productLink">
                        <img className="productImage" src={require('../assets/images/good-day-to-code.jpg')} alt="It's a good day to code"/>
                    </a>
                    <br /><a href="/product/143" className="productLink">It's a good day to code</a>
                </li>
                <li>
                    <a href="/product/486" className="productLink">
                        <img className="productImage" src={require('../assets/images/eat-sleep-code-repeat.jpg')} alt="Eat. Sleep. Code. Repeat."/>
                    </a>
                    <br /><a href="/product/486" className="productLink">Eat. Sleep. Code. Repeat.</a>
                </li>

                {/* New Products */}
                <li>
                    <a href="/product/505" className="productLink">
                        <img className="productImage" src={require('../assets/images/stickers.jpg')} alt="Coding Stickers Pack"/>
                    </a>
                    <br /><a href="/product/505" className="productLink">Coding Stickers Pack</a>
                </li>
                <li>
                    <a href="/product/606" className="productLink">
                        <img className="productImage" src={require('../assets/images/coding-mouse-pad.jpg')} alt="Coding Mouse Pad"/>
                    </a>
                    <br /><a href="/product/606" className="productLink">Coding Mouse Pad</a>
                </li>
                <li>
                    <a href="/product/707" className="productLink">
                        <img className="productImage" src={require('../assets/images/code-pen.jpg')} alt="Code Pen"/>
                    </a>
                    <br /><a href="/product/707" className="productLink">Code Pen</a>
                </li>
                <li>
                    <a href="/product/808" className="productLink">
                        <img className="productImage" src={require('../assets/images/keep-calm-notebook.jpg')} alt="Keep Calm Notebook"/>
                    </a>
                    <br /><a href="/product/808" className="productLink">Keep Calm Notebook</a>
                </li>
                <li>
                    <a href="/product/909" className="productLink">
                        <img className="productImage" src={require('../assets/images/bagpack.jpg')} alt="Coding Backpack"/>
                    </a>
                    <br /><a href="/product/909" className="productLink">Coding Backpack</a>
                </li>
                <li>
                    <a href="/product/1010" className="productLink">
                        <img className="productImage" src={require('../assets/images/coding-tote-bag.jpg')} alt="Coding Tote Bag"/>
                    </a>
                    <br /><a href="/product/1010" className="productLink">Coding Tote Bag</a>
                </li>
            </ul>
        </>
    )
}