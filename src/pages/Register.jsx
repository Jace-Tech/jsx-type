import { Grid, GridItem, HStack, Link, Stack, Text } from "@chakra-ui/react"
import AuthLayout from "../pageComponents/auth/AuthLayout"
import { BG_BLUE_COLOR } from "../utils/colors"
import { useForm } from "react-hook-form"
import { Link as ReactLink } from "react-router-dom"
import CustomInput from "../components/global/CustomInput"
import CustomButton from "../components/global/CustomButton"

const Register = () => {
  const { control } = useForm({
    mode: "onTouched"
  })

  return (
    <AuthLayout bg={BG_BLUE_COLOR} title={"Register"}>
      <Grid gap={6} templateColumns={"1fr 1fr"}>
        <CustomInput 
          control={control}
          colSpan={[2, 1]}
          name={"firstname"}
          InputProps={{ placeholder: "First name"}}
          rules={{ required: "Firstname is required", minLength: { value: 3, message: "Please enter a valid name" } }}
        />

        <CustomInput 
          control={control}
          colSpan={[2, 1]}
          name={"lastname"}
          InputProps={{ placeholder: "Last name"}}
          rules={{ required: "Lastname is required", minLength: { value: 3, message: "Please enter a valid name" } }}
        />

        <CustomInput 
          control={control}
          name={"phone"}
          colSpan={2}
          InputProps={{ placeholder: "Phone number", type: "tel" }}
          rules={{ required: "Phone number is required", minLength: { value: 11, message: "Please enter a valid phone number" } }}
        />

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
            <CustomButton fontSize={"md"} mt={8} py={7} w={"100%"}>Register</CustomButton>
            <HStack fontWeight={"medium"} fontSize={"sm"} justifyContent={"center"}>
              <Text>Already have an account? </Text>
              <Link to={"/login"} color={"blue.400"} as={ReactLink}>Login</Link>
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </AuthLayout>
  )
}

export default Register