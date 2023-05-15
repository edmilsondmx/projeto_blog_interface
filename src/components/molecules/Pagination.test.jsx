import React from "react";
import { render, screen, fireEvent } from "test-utils";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  test("renders pagination correctly", () => {
    const postsPerPage = 5;
    const totalPosts = 20;
    const currentPage = 1;
    const scrollToTop = jest.fn();
    const paginate = jest.fn();

    render(
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        scrollToTop={scrollToTop}
        paginate={paginate}
      />
    );

    // Verifica se os botões de páginação estão sendo renderizados corretamente
    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons).toHaveLength(4); // 5 números de página + 2 botões de navegação (<< e >>)

    // Verifica se a página atual está com a classe 'active'
    const activePageButton = screen.getByText(currentPage.toString());
    expect(activePageButton).toHaveClass("active");

    // Simula clique em um botão de página
    const nextPageButton = screen.getByText("2");
    fireEvent.click(nextPageButton);

    // Verifica se a função paginate foi chamada corretamente
    expect(paginate).toHaveBeenCalledTimes(1);
    expect(paginate).toHaveBeenCalledWith(2);

    // Verifica se a função handleUpdatePages foi chamada corretamente
    expect(scrollToTop).toHaveBeenCalledTimes(1);
  });
});
