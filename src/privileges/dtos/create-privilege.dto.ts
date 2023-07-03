import { IsNotEmpty } from "class-validator";

export class CreatePrivilegeDto {
    @IsNotEmpty()
    user_id: number

    @IsNotEmpty()
    permission_id: number

    @IsNotEmpty()
    is_active: boolean

    created_by: number
}
