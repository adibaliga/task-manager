import { useAuthContext } from "@asgardeo/auth-react";

const useIsAuthenticated = () => {
  const { state, signIn, signOut } = useAuthContext();
  return {
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    signIn,
    signOut,
  };
};

export default useIsAuthenticated;
