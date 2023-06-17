import { Grid, GridItem, HStack, Link, Stack, Text } from "@chakra-ui/react"
import AuthLayout from "../pageComponents/auth/AuthLayout"
import { BG_BLUE_COLOR } from "../utils/colors"
import { useForm } from "react-hook-form"
import { Link as ReactLink } from "react-router-dom"
import CustomInput from "../components/global/CustomInput"
import CustomButton from "../components/global/CustomButton"

const Login = () => {
  const { control } = useForm({
    mode: "onTouched"
  })

  return (
    <AuthLayout bg={BG_BLUE_COLOR} title={"Login"}>
      <Grid gap={6} templateColumns={"1fr 1fr"}>

        <CustomInput 
          control={control}
          name={"email"}
          colSpan={2}
          InputProps={{ placeholder: "Email", type: "email" }}
          rules={{ required: "Email is required" }}
        />

        <CustomInput 
          control={control}
          name={"password"}
          password
          colSpan={2}
          InputProps={{ placeholder: "Password"}}
          rules={{ required: "Password is required" }}
        />

        <GridItem colSpan={2}>
          <Stack spacing={3}>
            <CustomButton fontSize={"md"} mt={8} py={7} w={"100%"}>Login</CustomButton>
            <HStack fontWeight={"medium"} fontSize={"sm"} justifyContent={"center"}>
              <Text>Don{"'"}t have an account?</Text>
              <Link to={"/register"} color={"blue.400"} as={ReactLink}>Register</Link>
            </HStack>
          </Stack>
        </GridItem>

      </Grid>
    </AuthLayout>
  )
}

export default Login