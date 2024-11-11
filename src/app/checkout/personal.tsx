// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import React from "react";
// import CustomButton from "../../components/Button";
// import { Link, router } from "expo-router";
// import InputField from "~/components/InputField";
// import {
//   SafeAreaInsetsContext,
//   SafeAreaView,
// } from "react-native-safe-area-context";
// import KeyboardAwareScrollview from "~/components/KeyboardAwareScrollView";
// import {
//   useForm,
//   SubmitHandler,
//   Controller,
//   FormProvider,
// } from "react-hook-form";
// import CustomTextInput from "~/components/VadimTextInput";

// const Personal = () => {
//   const {handleSubmit,formState:{errors},control} = useForm();

//   console.log(errors);
//   const onNext = (data: any) => {
//     //Validate form
//     console.log(data);
//     //navigate to next
//     router.push("./payment");
//   };

//   return (
//     <KeyboardAwareScrollview>
//       {/* <FormProvider {...form}> */}
//       <Controller 
//       control={control}
//       name='fullName'
//       rules={{required:'Must be filled'}}
//       render={({field:{value,onBlur,onChange}})=>(
//         <CustomTextInput value={value} onChangeText={onChange} onBlur={onBlur} label="Full Name" placeholder="Joe doe" />
//       )}
//       />

//         <CustomTextInput label="Address" />

//         <CustomTextInput label="City" placeholder="Joe doe" />

//         <CustomTextInput label="Town" placeholder="Joe doe" />

//         <CustomButton
//           title="Next"
//           onPress={handleSubmit(onNext)}
//         //   onPress={form.handleSubmit(onNext)}
//           style={styles.button}
//         />
//       {/* </FormProvider> */}
//     </KeyboardAwareScrollview>
//   );
// };

// export default Personal;

// const styles = StyleSheet.create({
//   container: {},
//   button: {
//     marginTop: "auto",
//     // marginBottom: 25,
//   },
//   input: {
//     borderColor: "gainsboro",
//     borderWidth: 1,
//     width: "100%",
//     padding: 10,
//     borderRadius: 5,

//     marginTop: 4,
//     marginBottom: 2,
//     // minHeight:100
//   },
// });


import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import React from "react";
  import CustomButton from "../../components/Button";
  import { Link, router } from "expo-router";
  import InputField from "~/components/InputField";
  import {
    SafeAreaInsetsContext,
    SafeAreaView,
  } from "react-native-safe-area-context";
  import KeyboardAwareScrollview from "~/components/KeyboardAwareScrollView";
  import {
    useForm,
    SubmitHandler,
    Controller,
    FormProvider,
  } from "react-hook-form";
  import CustomTextInput from "~/components/VadimTextInput";
  import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


const PersonalInfoSchema = z.object({
    fullName: z
      .string({ message: 'Full name is required!' })
      .min(5, { message: 'Full name must be longer than 5' }),
    address: z.string().optional(),
    city: z.string().min(1, { message: 'City is required!' }),
    postcode: z.string().min(1, { message: 'Postal code is required!' }),
    phone: z.string().min(1, { message: 'Phone is required!' }),
  }); 

  type PersonalInfo=z.infer<typeof PersonalInfoSchema>

  const Personal = () => {
    const form = useForm<PersonalInfo>({
        resolver:zodResolver(PersonalInfoSchema)
    });
  
    console.log(form.formState.errors);
    const onNext:SubmitHandler<PersonalInfo> = (data) => {
      //Validate form
      console.log(data);
      //navigate to next
      router.push("./payment");
    };
  
    return (
      <KeyboardAwareScrollview>
        <FormProvider {...form}>
          <CustomTextInput name="fullName" label="Full Name" placeholder="Joe doe" />
  
          <CustomTextInput label="Address" name={"address"} />
  
          <CustomTextInput label="City" placeholder="Joe doe" name={"city"} />
  
          <CustomTextInput label="Town" placeholder="Joe doe" name={"postcode"} />
          <CustomTextInput label="Phone Number" placeholder="0808888888" name={"phone"} inputMode="tel"/>
  
          <CustomButton
            title="Next"
            onPress={form.handleSubmit(onNext)}
            style={styles.button}
          />
        </FormProvider>
      </KeyboardAwareScrollview>
    );
  };
  
  export default Personal;
  
  const styles = StyleSheet.create({
    container: {},
    button: {
      marginTop: "auto",
      // marginBottom: 25,
    },
    input: {
      borderColor: "gainsboro",
      borderWidth: 1,
      width: "100%",
      padding: 10,
      borderRadius: 5,
  
      marginTop: 4,
      marginBottom: 2,
      // minHeight:100
    },
  });
  