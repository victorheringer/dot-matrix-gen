import useAnimateGrid from "../../hooks/useAnimateGrid";
import { Grid } from "../../components";
import { HomeContainer, Title, Paragraph } from "./styled";
import frame1 from "../../assets/frame1.json";
import frame2 from "../../assets/frame2.json";

export default function Home() {
  const { grid } = useAnimateGrid({ grids: [frame1, frame2], time: 1000 });

  return (
    <HomeContainer>
      <Title>Welcome to Dot Matrix Gen</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        hendrerit, augue in pellentesque dignissim, ligula nibh elementum urna,
        sed aliquam nisl sapien ac est. Vivamus ultricies, ligula eu
        sollicitudin faucibus, enim dolor accumsan ligula, nec rhoncus tortor
        sem in enim. Fusce at volutpat justo. Cras rutrum ante nec magna aliquam
        scelerisque. Quisque a erat a leo pulvinar vulputate et vel tellus. Sed
        et ipsum purus.
      </Paragraph>
      <Grid matrix={grid} pixelSize={10} clickCell={() => {}} />
    </HomeContainer>
  );
}
