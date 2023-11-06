import { Heading, Stack, Text } from "@chakra-ui/react"
import { changesText, privacyData, privacyText } from "../../contents/privacy"
import PageContainer from "../../components/global/PageContainer"

const PrivacyInfo = () => {
  return (
    <PageContainer h={"full"}>
      <Stack py={12} spacing={10}>
        <div data-aos="fade-in">
          <Text>{privacyText}</Text>
        </div>

        {privacyData.map((item, index) => (
          <Stack key={`privacy-section-${index}`} spacing={4}>
            <Stack spacing={2}>
              <Heading size="md" fontWeight={"700"}>{item.title}</Heading>
              {item.text && <Text>{item.text}</Text>}
            </Stack>
            
            { item.children.map((content, index) => (
              <Text key={`privacy-content-${item.title}-${index}`}>
                <Text display={"inline"} fontWeight={"semibold"}>{content.heading}&nbsp;&nbsp;</Text>
                <Text display={"inline"}>{content.text}</Text>
              </Text>
            ))}
          </Stack>
        ))}

        <Stack>
          <Heading size="md" fontWeight={"700"}>Changes to this Privacy Policy</Heading>
          <Text>{changesText}</Text>
        </Stack>
      </Stack>

    </PageContainer>
  )
}

export default PrivacyInfo