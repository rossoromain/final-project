import CustomRoleAssignmentDb from "."

export const getCustomRoleOfUser = (userId: string) => {
    return CustomRoleAssignmentDb.findOne({ userId: userId });
}