import useAnimateGrid from "../../hooks/useAnimateGrid";
import { Grid } from "../../components";
import { Paragraph, StyledLink } from "./styled";
import { ScreenContainer, ScreenTitle } from "../../components";
import frame1 from "../../assets/frame1.json";
import frame2 from "../../assets/frame2.json";

export default function Home() {
  const { grid } = useAnimateGrid({ grids: [frame1, frame2], time: 1000 });

  return (
    <ScreenContainer>
      <ScreenTitle>Welcome to Dot Matrix Gen</ScreenTitle>
      <Paragraph>
        Dot matrix gen is a simple way to replicate animations like the classics
        Tamagochi and Rakuraku Dinokun, that can be exported as a simple vector
        of matrix. You can create a frame by frame animation using the editor
        and play/pause the animation.
      </Paragraph>
      <StyledLink to={`/projects`}>to projects →</StyledLink>
      <Grid matrix={grid} pixelSize={10} clickCell={() => {}} />
    </ScreenContainer>
  );
}
