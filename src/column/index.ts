import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from "typeorm";
  
  export const IsDeleted = Column({
    name: "is_deleted",
    type: "boolean",
    nullable: false,
    select: false,
    default: false,
    comment: "soft delete",
  });
  
  export const ModifiedBy = Column({
    name: "modified_by_user_id",
    type: "integer",
    nullable: false,
    select: false,
  });
  
  export const CreateDate = CreateDateColumn({
    name: "created_at",
    type: "timestamp",
    nullable: false,
    select: false,
  });
  
  export const UpdateDate = UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    nullable: true,
    select: false,
  });
  
  export const DeleteDate = DeleteDateColumn({
    name: "deleted_at",
    type: "timestamp",
    nullable: true,
    select: false,
  });
  
  export const Coordinate = Column({
    type: "point",
    nullable: true,
    default: [0, 0],
    transformer: {
      from: (point: { x: number; y: number }) =>
        !!point ? [point.x, point.y] : null,
      to: (coordinates: [number, number]) =>
        !!coordinates ? `(${coordinates[0]},${coordinates[1]})` : null,
    },
  });
  