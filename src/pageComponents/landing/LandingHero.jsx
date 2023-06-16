import { Box, Grid, GridItem, HStack, Image, Link, Stack, Text, } from "@chakra-ui/react";
import PageContainer from "../../components/global/PageContainer";
import { HERO_IMAGE, HERO_TEXT, HERO_TITLE } from "../../contents/landing";
import { PRIMARY_COLOR } from "../../utils/colors";

import appStore from "../../assets/images/apple-download.png"
import playStore from "../../assets/images/play.png"
import TitleText from "../../components/global/TitleText";
import { SECTION_VERTICAL_PADDING } from "../../utils/constants";
import SlideBox from "../../components/global/SlideBox";

const LandingHero = () => {
  return (
    <PageContainer as={"section"} id="Hero" py={SECTION_VERTICAL_PADDING}>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr"]} gap={20}>
        <GridItem>
          <Stack mt={[0, 0, 10]}>
            <Box textAlign={["center", "center", "left"]}>
              {HERO_TITLE?.split("\n").map((line, index) => (
                <SlideBox key={`hero-title-${index}`}>
                  <TitleText fontWeight={"medium"} color={PRIMARY_COLOR} lineHeight={"1.3"}>{ line }</TitleText>
                </SlideBox>
              ))}
            </Box>

            <Text className={"animate__animated animate__fadeInUp"} textAlign={["center", "center", "left"]} fontWeight={500} mt={4} maxW={["full", "full", "md"]} fontSize={"lg"}>{HERO_TEXT}</Text>

            <HStack className={"animate__animated animate__fadeInUp"} mt={10} spacing={4} justifyContent={["center", "center", "flex-start"]}>
              <Link as={Image} maxW={40} w={"100%"} src={appStore} alt="Download on ios" />
              <Link as={Image} maxW={40} w={"100%"} src={playStore} alt="Download on ios" />
            </HStack>
          </Stack>
        </GridItem>
        <GridItem>
          <Image className={"animate__animated animate__fadeInRight"} maxW={500} w={"100%"} mx={["auto", "auto", 0]} src={HERO_IMAGE} alt="Hero Image" />
        </GridItem>
      </Grid>
    </PageContainer>
  );
}

export default LandingHero;