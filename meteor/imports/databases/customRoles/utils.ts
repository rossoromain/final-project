export const enum CustomRolePermission {

    // High level permissions 0 - 100
    // Medium level permissions 101 - 200
    // Low level permissions 201 - 300

    CRUD_MACHINE = 1,
    USER_MANAGMENT = 2,
}

export const checkIfUserHasCustomRole = (userCustomRoles: number[], targetCustomRole: CustomRolePermission) => {
    for (let role of userCustomRoles) {
        if (targetCustomRole === role) {
            return true;
        }
    }
    return false;
}