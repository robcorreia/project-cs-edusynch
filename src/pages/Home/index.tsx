import { ArrowRight, CurrencyBtc, Plus } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { AboutUs, BackgroundSeparator, Contact, ContactForm, Container, Hero, TopCryptos, TagBox } from "./styles";
import { Card } from "../../components/Card";
import { Table } from "../../components/Table";
import { SignUpModal } from "../../components/SignUpModal";
import * as Dialog from '@radix-ui/react-dialog'


export function Home() {
  return (
    <Container>

      <Section>

        <Hero>
          <div>
            <div>
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button size={278} height={48} color="#ffffff">SIGN UP NOW <ArrowRight size={15} weight='bold' /></Button>
                </Dialog.Trigger>
                <SignUpModal />
              </Dialog.Root>
            </div>

            <TagBox>
              <Tag title='Cryptos' />
              <Tag title='NFTs' />
              <Tag title='Games' />
            </TagBox>

          </div>
          <div>
            Slider
          </div>
        </Hero>

      </Section>

      <BackgroundSeparator />

      <AboutUs>
        <Section>
          <div className="about-us-content">
            <div className="card-container">
              <div className="top-content">
                <Card
                  icon={'images/icon-1.svg'}
                  upTitle="For your company"
                  title="Crypto Solutions"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
                />
                <Card
                  icon={'images/icon-2.svg'}
                  upTitle="For your company"
                  title="Crypto Solutions"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
                />
              </div>
              <div className="bottom-content">
                <Card
                  icon={'images/icon-3.svg'}
                  upTitle="For your company"
                  title="Crypto Solutions"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
                />
                <Card
                  icon={'images/icon-4.svg'}
                  upTitle="For your company"
                  title="Crypto Solutions"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
                />
              </div>

            </div>
            <div className="side-content">
              <h5>Lorem ipsum</h5>
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button size={176} height={48} color="#ffffff">Sign up now</Button>
                </Dialog.Trigger>
                <SignUpModal />
              </Dialog.Root>
            </div>
          </div>
        </Section>

      </AboutUs>

      <TopCryptos>

        <Section>
          <h3>Top Cryptos</h3>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Crypto</th>
                <th>Price</th>
                <th>Change</th>
                <th>Trade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="position">01</td>
                <td className="coin"><CurrencyBtc size={32} weight="fill" />Bitcoin <span className="initials">BTC</span></td>
                <td className="price">US$ 25.499,52</td>
                <td className="change">+5,65%</td>
                <td className="trade"><a className="buy-button" href="/">Buy</a></td>
              </tr>
              <tr>
                <td className="position">01</td>
                <td className="coin">Bitcoin <span className="initials">BTC</span></td>
                <td className="price">US$ 25.499,52</td>
                <td className="change">+5,65%</td>
                <td className="trade"><a className="buy-button" href="/">Buy</a></td>
              </tr>
              <tr>
                <td className="position">01</td>
                <td className="coin">Bitcoin <span className="initials">BTC</span></td>
                <td className="price">US$ 25.499,52</td>
                <td className="change">+5,65%</td>
                <td className="trade"><a className="buy-button" href="/">Buy</a></td>
              </tr>
              <tr>
                <td className="position">01</td>
                <td className="coin">Bitcoin <span className="initials">BTC</span></td>
                <td className="price">US$ 25.499,52</td>
                <td className="change">+5,65%</td>
                <td className="trade"><a className="buy-button" href="/">Buy</a></td>
              </tr>
            </tbody>
          </Table>

          <button className="view-more">View More <Plus size={12} weight="bold" /></button>

        </Section>

      </TopCryptos>

      <Contact>

        <div className="background">
          <Section>
            <div className="content">
              <div className="content-left">

                <h4>Lorem ipsum </h4>
                <h2>Lorem ipsum </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

              </div>
              <div>
                <ContactForm>
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                  <Button size={384} height={48} color="#ffffff">Subscribe</Button>
                </ContactForm>
              </div>
            </div>
          </Section>
        </div>
      </Contact>
    </Container>
  )
}