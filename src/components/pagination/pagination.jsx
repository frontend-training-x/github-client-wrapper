import PropTypes from 'prop-types';
import clsx from 'classnames/bind';

import usePagination from '../../hooks/usePagination';

// Esto es para no tener los estilos tan largos en el html
const classes = clsx.bind({
  root: 'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20',
  current: 'border-indigo-500 bg-indigo-50 text-indigo-600',
  hasDots: 'bg-gray-50',
});

function PaginationItem({ current = false, hasDots = false, href, children }) {
  return (
    <a href={href} className={classes('root', current && 'current', hasDots && 'hasDots')}>
      {children}
    </a>
  );
}

function Pagination({ since, page, count }) {
  const { pagesInLeft, pagesInRight, shouldRenderLastPage, shouldRenderFirstPage } = usePagination({
    since,
    page,
    count,
  });

  return (
    <nav className="isolate inline-flex rounded-md shadow-sm" aria-label="Pagination">
      {/* Renderiza la pagina 1 */}
      {shouldRenderFirstPage && (
        <>
          <PaginationItem href={`?since=${0}`}>1</PaginationItem>
          <PaginationItem hasDots>...</PaginationItem>
        </>
      )}

      {/* Renderiza las paginas a la izquierda de page */}
      {pagesInLeft.map(p => (
        <PaginationItem href={`?since=${p * 30 - 30}`} key={p}>
          {p}
        </PaginationItem>
      ))}

      {/* Renderiza la pagina actual */}
      <PaginationItem current href={`?since=${page * 30 - 30}`}>
        {since / 30 + 1}
      </PaginationItem>

      {/* Renderiza las paginas a la derecha de page */}
      {pagesInRight.map(p => (
        <PaginationItem href={`?since=${p * 30 - 30}`} key={p}>
          {p}
        </PaginationItem>
      ))}

      {/* Renderiza la pagina count */}
      {shouldRenderLastPage && (
        <>
          <PaginationItem hasDots>...</PaginationItem>
          <PaginationItem href={`?since=${count * 30 - 30}`}>{count}</PaginationItem>
        </>
      )}
    </nav>
  );
}

export default Pagination;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

PaginationItem.propTypes = {
  current: PropTypes.bool,
  hasDots: PropTypes.bool,
};

PaginationItem.defaultProps = {
  current: false,
  hasDots: false,
};
