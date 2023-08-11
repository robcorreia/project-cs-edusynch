import { Footer } from "../../components/Footer";
import { DashboardHeader } from "../../components/HeaderDashboard";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";
import { Wallet } from "../../components/Wallet";
import { Container } from "./styles";

export function Dashboard() {

  return (
    <Container>
      <SideMenu />
      <Section>
        <DashboardHeader />
        <Wallet />
      </Section>
    </Container>
  )
}