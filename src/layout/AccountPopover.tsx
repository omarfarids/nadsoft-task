import PropTypes from "prop-types";
import { Box, Popover, PopoverVirtualElement, Typography } from "@mui/material";
import useGetData from "@/hooks/useGetData";
import { useDispatch } from "react-redux";
import { setUSState } from "@/store/reducers/globalReducer";

export const AccountPopover = ({
  anchorEl,
  onClose,
  open,
}: {
  anchorEl:
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null
    | undefined;
  onClose: () => void;
  open: boolean;
}) => {
  // -------------- hooks ------------
  const { data, loading, error } = useGetData("/v1/states/info.json");
  const dispatch = useDispatch();

  // ------------- functions ---------------

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 70 } }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            cursor: "pointer",
            "&:hover": { bgcolor: "action.hover" },
            p: 1,
            textAlign: "center",
          }}
          onClick={() => {
            dispatch(setUSState("ALL"));
            onClose();
          }}
        >
          All
        </Typography>
        {data?.map((state: { state: string; notes: string }) => {
          return (
            <Typography
              key={state.state}
              title={state.notes}
              variant="overline"
              onClick={() => {
                dispatch(setUSState(state.state));
                onClose();
              }}
              sx={{
                cursor: "pointer",
                "&:hover": { bgcolor: "action.hover" },
                p: 1,
                textAlign: "center",
              }}
            >
              {state.state}
            </Typography>
          );
        })}
      </Box>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
