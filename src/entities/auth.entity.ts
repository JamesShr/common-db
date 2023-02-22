import { Column, Entity, PrimaryColumn } from "typeorm";

import { Role } from "../enum/role.enum";

@Entity({ name: "auth" })
export class Auth {
  @PrimaryColumn({ name: "id", type: "varchar", nullable: false })
  public id: string;

  @Column({ name: "role", type: "enum", enum: Role, default: Role.MEMBER })
  public role: Role;

  @Column({ name: "account", type: "varchar", nullable: false })
  public account: string;

  @Column({ name: "password", type: "varchar", nullable: false })
  public password: string;
}
