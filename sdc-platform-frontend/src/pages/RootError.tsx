import { useRouteError } from "react-router-dom";
import { GeneralError, NoAccess, Typography } from "@astron-sdc/design-system";
import Layout from "src/components/Layout";

/**
 * Error boundary in the root, which displays a message in case of an unrecoverable error.
 */
const RootError = () => {
  // Allow any error to be caught
  // eslint-disable-next-line
  let err: any = useRouteError();
  // try for err.error is an Error
  if (!(err instanceof Error)) {
    err = err.error;
  }

  return (
    <Layout title="">
      {err.message.includes("401") || err.message.includes("404") ? (
        <NoAccess
          title="You need permission to access"
          content={<Typography text="Please contact admin for access rights." variant="paragraph" />}
        />
      ) : (
        <GeneralError title="Something went wrong!" content="" />
      )}
    </Layout>
  );
};

export default RootError;
