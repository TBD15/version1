import React from "react";
import { GetServerSideProps, NextPage } from "next";
import SignInBox from "../components/SignInBox/SignInBox";

interface SignInPageProps {}
const SignInScreen: NextPage<SignInPageProps> = () => {
  return <SignInBox />;
};

export default SignInScreen;
