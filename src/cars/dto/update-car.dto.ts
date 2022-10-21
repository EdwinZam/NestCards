import { IsString, MinLength, IsUUID, IsOptional} from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
   
    @IsOptional()
    @IsString({message: `the brand most be a cool string`})
    readonly brand?: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    readonly model?: string;
}