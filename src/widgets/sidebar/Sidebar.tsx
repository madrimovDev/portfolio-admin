import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	colors,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import WorkIcon from "@mui/icons-material/Work";
import ScienceIcon from "@mui/icons-material/Science";
import NewspaperIcon from "@mui/icons-material/Newspaper";
export const Sidebar = () => {
  const {pathname} = useLocation()
	return (
		<Box
			height="100vh"
			bgcolor={colors.grey[900]}
    >
      <Typography variant="subtitle1" p={2} color='primary'>Madrimov Admin</Typography>
			<List disablePadding>
				<ListItemButton
					selected={pathname === "/"}
					component={Link}
					to=""
				>
					<ListItemIcon>
						<FaceIcon />
					</ListItemIcon>
					<ListItemText>Bio</ListItemText>
				</ListItemButton>
				<ListItemButton
					selected={pathname === "/experience"}
					component={Link}
					to="experience"
				>
					<ListItemIcon>
						<ScienceIcon />
					</ListItemIcon>
					<ListItemText>Experience</ListItemText>
				</ListItemButton>
				<ListItemButton
					selected={pathname === "/works"}
					component={Link}
					to="works"
				>
					<ListItemIcon>
						<WorkIcon />
					</ListItemIcon>
					<ListItemText>Works</ListItemText>
				</ListItemButton>
				<ListItemButton
					selected={pathname === "/blogs"}
					component={Link}
					to="blogs"
				>
					<ListItemIcon>
						<NewspaperIcon />
					</ListItemIcon>
					<ListItemText>Blogs</ListItemText>
				</ListItemButton>
			</List>
		</Box>
	);
};








