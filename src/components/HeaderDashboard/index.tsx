import { Container } from "./styles";

export function DashboardHeader() {


  return (<Container>
    <div className="card us-balance">
      <div className="content-left">
        <img src="images/balance-icon.svg" alt="Balance Icon" />
        <div>
          <h4>Balance in US$</h4>
          <p>(approximately)</p>
        </div>
      </div>
      <div className="content-right">
        <h3>$32,256.56</h3>
      </div>
    </div>

    <div className="card daily-variation">
      <div className="content-left">
        <p>Daily Variation</p>
        <div className="coin">icon + <p>ETH</p></div>
        <span>+5,65%</span>
      </div>
      <div className="content-right">
        <img src="images/graphic-variation.svg" alt="" />
      </div>
    </div>

    <div className="card nft-news">
      <div className="content-left">
        <p><strong>NFT’s NEWS</strong></p>
        <span>New ElephantX NFT
          to be lauched!</span>
        <a href="/">Read more +</a>
      </div>
      <div className="content-right">
        <img src="images/elephant.svg" alt="" />
      </div>
    </div>

  </Container>)
}