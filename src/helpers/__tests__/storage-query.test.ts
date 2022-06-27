import {
  createProject,
  createSprite,
  createFrame,
  deleteProject,
  deleteSprite,
  deleteFrame,
  updateFrame,
} from "../storage-query";
import * as NumberHelper from "../number";

describe("createProject", () => {
  it("should add a new project to an empty project document", () => {
    jest
      .spyOn(NumberHelper, "generateId")
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);

    expect(createProject({})).toEqual({
      1: {
        name: "New project",
        sprites: { 2: { name: "New Sprite", frames: { [3]: { data: [[]] } } } },
      },
    });
  });

  it("should add a new project to project document with projects", () => {
    jest
      .spyOn(NumberHelper, "generateId")
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(6);

    expect(
      createProject({
        1: {
          name: "New project",
          sprites: {
            2: { name: "New Sprite", frames: { [5]: { data: [[]] } } },
          },
        },
      })
    ).toEqual({
      1: {
        name: "New project",
        sprites: { 2: { name: "New Sprite", frames: { [5]: { data: [[]] } } } },
      },
      3: {
        name: "New project",
        sprites: { 4: { name: "New Sprite", frames: { [6]: { data: [[]] } } } },
      },
    });
  });
});

describe("createSprite", () => {
  it("should add a new sprite to an empty sprite document", () => {
    jest
      .spyOn(NumberHelper, "generateId")
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4);

    expect(
      createSprite(
        {
          1: {
            name: "New project",
            sprites: {},
          },
        },
        1
      )
    ).toEqual({
      1: {
        name: "New project",
        sprites: {
          3: { name: "New Sprite", frames: { [4]: { data: [[]] } } },
        },
      },
    });
  });

  it("should add a new sprite to sprite document with sprites", () => {
    jest
      .spyOn(NumberHelper, "generateId")
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(5);

    expect(
      createSprite(
        {
          1: {
            name: "New project",
            sprites: {
              2: { name: "New Sprite", frames: { [4]: { data: [[]] } } },
            },
          },
        },
        1
      )
    ).toEqual({
      1: {
        name: "New project",
        sprites: {
          3: { name: "New Sprite", frames: { [5]: { data: [[]] } } },
          2: { name: "New Sprite", frames: { [4]: { data: [[]] } } },
        },
      },
    });
  });
});

describe("createFrame", () => {
  it("should add a new frame to an empty frame document", () => {
    jest.spyOn(NumberHelper, "generateId").mockReturnValueOnce(3);

    expect(
      createFrame(
        {
          1: {
            name: "New project",
            sprites: {
              2: { name: "New Sprite", frames: {} },
            },
          },
        },
        1,
        2
      )
    ).toEqual({
      1: {
        name: "New project",
        sprites: {
          2: { name: "New Sprite", frames: { [3]: { data: [[]] } } },
        },
      },
    });
  });

  it("should add a new frame to frame document with frames", () => {
    jest.spyOn(NumberHelper, "generateId").mockReturnValueOnce(5);

    expect(
      createFrame(
        {
          1: {
            name: "New project",
            sprites: {
              2: { name: "New Sprite", frames: { [4]: { data: [[]] } } },
            },
          },
        },
        1,
        2
      )
    ).toEqual({
      1: {
        name: "New project",
        sprites: {
          2: {
            name: "New Sprite",
            frames: { [4]: { data: [[]] }, [5]: { data: [[]] } },
          },
        },
      },
    });
  });
});

describe("deleteProject", () => {
  it("should delete an existing project", () => {
    expect(
      deleteProject(
        {
          1: {
            name: "New project",
            sprites: {
              2: { name: "New Sprite", frames: { [5]: { data: [[]] } } },
            },
          },
        },
        1
      )
    ).toEqual({});
  });
});

describe("deleteSprite", () => {
  it("should delete an existing sprite", () => {
    expect(
      deleteSprite(
        {
          1: {
            name: "New project",
            sprites: {
              2: { name: "New Sprite", frames: { [5]: { data: [[]] } } },
            },
          },
        },
        1,
        2
      )
    ).toEqual({
      1: {
        name: "New project",
        sprites: {},
      },
    });
  });
});

describe("deleteFrame", () => {
  it("should delete an existing frame", () => {
    expect(
      deleteFrame(
        {
          1: {
            name: "New project",
            sprites: {
              2: { name: "New Sprite", frames: { [5]: { data: [[]] } } },
            },
          },
        },
        1,
        2,
        5
      )
    ).toEqual({
      1: {
        name: "New project",
        sprites: { 2: { name: "New Sprite", frames: {} } },
      },
    });
  });
});

describe("updateFrame", () => {
  it("should update frame data", () => {
    expect(
      updateFrame(
        {
          1: {
            name: "New project",
            sprites: {
              2: { name: "New Sprite", frames: { [5]: { data: [[]] } } },
            },
          },
        },
        1,
        2,
        5,
        [[true, true]]
      )
    ).toEqual({
      1: {
        name: "New project",
        sprites: {
          2: { name: "New Sprite", frames: { [5]: { data: [[true, true]] } } },
        },
      },
    });
  });
});
