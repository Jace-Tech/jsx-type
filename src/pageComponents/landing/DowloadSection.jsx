import { Box, HStack } from "@chakra-ui/react"
import { SECTION_VERTICAL_PADDING } from "../../utils/constants"
import PageContainer from "../../components/global/PageContainer"
import TitleText from "../../components/global/TitleText"
import CustomButton from "../../components/global/CustomButton"
import { useState } from "react"
import DownloadCard from "../../components/local/DownloadCard"

const DowloadSection = () => {
  const [sectionName, setSectionName] = useState("rider")

  return (
    <Box py={SECTION_VERTICAL_PADDING} pb={0}>
      <PageContainer py={12}>
        <div data-aos="fade-up">
          <HStack flexDir={['column', 'column', 'row']} spacing={8} alignItems={["flex-start", "flex-start", "center"]}>
            <TitleText lineHeight={"1.3"}>Download our apps</TitleText>
            <HStack spacing={4}>
              <CustomButton
                outlined={sectionName !== "rider"}
                bColor={"#000"}
                onClick={() => setSectionName("rider")}
              >Riders</CustomButton>

              <CustomButton
                outlined={sectionName !== "driver"}
                bColor={"#000"}
                onClick={() => setSectionName("driver")}
              >Drivers</CustomButton>
            </HStack>
          </HStack>
        </div>
      </PageContainer>

      <DownloadCard type={sectionName} />
    </Box>
  )
}

export default DowloadSection